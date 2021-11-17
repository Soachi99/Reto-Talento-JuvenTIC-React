using System.ComponentModel.DataAnnotations;

namespace API_Cartoon_Pizza.Models
{
    public class Pedidos
    {
        [Key]
        public int id { get; set; }
        public string fecha { get; set; }
        public string nombre { get; set; }
        public string email { get; set; }
        public string comentarios { get; set; }
        public int total { get; set; }
        public int numerop { get; set; }
    }
}
