using System.ComponentModel.DataAnnotations;

namespace API_Cartoon_Pizza.Models
{
    public class Productos
    {
        [Key]
        public int id { get; set; }
        public string nombre { get; set; }
        public string descripcion { get; set; }
        public int precio { get; set; }
        public string imagen { get; set; }
    }
}
