using API_Cartoon_Pizza.Context;
using API_Cartoon_Pizza.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace API_Cartoon_Pizza.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiciosController : Controller
    {
        private readonly MyDbContext context;

        public ServiciosController(MyDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok(context.Servicios.ToList());
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}", Name = "GetServicios")]
        public ActionResult Get(int id)
        {
            try
            {
                var datos = context.Servicios.FirstOrDefault(g => g.id == id);
                return Ok(datos);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //Post
        [HttpPost]
        public ActionResult Post([FromBody] Servicios datos)
        {
            try
            {
                context.Servicios.Add(datos);
                context.SaveChanges();
                return CreatedAtRoute("GetServicios", new { id = datos.id }, datos);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //PUT
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Servicios datos)
        {
            try
            {
                if (datos.id == id)
                {
                    context.Entry(datos).State = EntityState.Modified;
                    context.SaveChanges();
                    return CreatedAtRoute("GetServicios", new { id = datos.id }, datos);
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
                var datos = context.Servicios.FirstOrDefault(d => d.id == id);
                if (datos != null)
                {
                    context.Servicios.Remove(datos);
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
