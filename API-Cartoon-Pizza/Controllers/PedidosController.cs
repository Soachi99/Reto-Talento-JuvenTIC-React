using API_Cartoon_Pizza.Context;
using API_Cartoon_Pizza.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace API_Cartoon_Pizza.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PedidosController : Controller
    {
        private readonly MyDbContext context;

        public PedidosController(MyDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok(context.Pedidos.ToList());
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}", Name = "GetPedidos")]
        public ActionResult Get(int id)
        {
            try
            {
                var datos = context.Pedidos.FirstOrDefault(g => g.id == id);
                return Ok(datos);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //Post
        [HttpPost]
        public ActionResult Post([FromBody] Pedidos datos)
        {
            try
            {
                context.Pedidos.Add(datos);
                context.SaveChanges();
                return CreatedAtRoute("GetPedidos", new { id = datos.id }, datos);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //PUT
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Pedidos datos)
        {
            try
            {
                if (datos.id == id)
                {
                    context.Entry(datos).State = EntityState.Modified;
                    context.SaveChanges();
                    return CreatedAtRoute("GetPedidos", new { id = datos.id }, datos);
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
                var datos = context.Pedidos.FirstOrDefault(d => d.id == id);
                if (datos != null)
                {
                    context.Pedidos.Remove(datos);
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
