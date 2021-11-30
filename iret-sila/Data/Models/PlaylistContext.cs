using Microsoft.EntityFrameworkCore;

namespace iret_sila.Data.Models
{
    public class PlaylistContext : DbContext
    {
        public PlaylistContext(DbContextOptions<PlaylistContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Playlist> Playlists { get; set; } = null!;
    }
}