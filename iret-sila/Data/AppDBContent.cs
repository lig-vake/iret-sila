using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using iret_sila.Data.Models;
namespace iret_sila.Data
{
    public class AppDBContent : DbContext
    {
        public DbSet<Author> Authors { get; set; }
        public DbSet<Song> Songs { get; set; }
        public DbSet<MusicDirection> MusicDirections { get; set; }
        public AppDBContent()
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Server=localhost;Port=5432;Database=testdb;Username=postgres;Password=salavat");
        }
    }
}
