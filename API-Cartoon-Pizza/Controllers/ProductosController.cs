using API_Cartoon_Pizza.Context;
using API_Cartoon_Pizza.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace API_Cartoon_Pizza.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductosController : Controller
    {
        private readonly MyDbContext context;

        public ProductosController(MyDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok(context.Productos.ToList());
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}", Name = "GetProductos")]
        public ActionResult Get(int id)
        {
            try
            {
                var datos = context.Productos.FirstOrDefault(g => g.id == id);
                return Ok(datos);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //Post
        [HttpPost]
        public ActionResult Post([FromBody] Productos datos)
        {
            try
            {
                context.Productos.Add(datos);
                context.SaveChanges();
                return CreatedAtRoute("GetProductos", new { id = datos.id }, datos);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //PUT
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Productos datos)
        {
            try
            {
                if (datos.id == id)
                {
                    context.Entry(datos).State = EntityState.Modified;
                    context.SaveChanges();
                    return CreatedAtRoute("GetProductos", new { id = datos.id }, datos);
                }
                else
                {
                    return BadRequest();
                }

            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        //DELETE
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                var datos = context.Productos.FirstOrDefault(d => d.id == id);
                if (datos != null)
                {
                    context.Productos.Remove(datos);
                    context.SaveChanges();
                    return Ok(id);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
