using API_Cartoon_Pizza.Models;
using Microsoft.EntityFrameworkCore;

namespace API_Cartoon_Pizza.Context
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {

        }
        public DbSet<Productos> Productos { get; set; }

    }
}
