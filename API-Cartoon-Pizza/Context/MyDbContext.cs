using API_Cartoon_Pizza.Models;
using Microsoft.EntityFrameworkCore;

namespace API_Cartoon_Pizza.Context
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {

        }
        public DbSet<Pedidos> Pedidos { get; set; }
        public DbSet<Productos> Productos { get; set; }

    }
}
