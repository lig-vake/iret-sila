using iret_sila.Data.Interfaces;
using iret_sila.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
namespace iret_sila.Data.Repository
{
    public class SongRepository : ISong
    {
        private readonly AppDBContent db;
        public SongRepository(AppDBContent p)
        {
            this.db = p;
        }

        public IEnumerable<Song> getAllSong => db.Songs.Include(c => c.Author);
        public IEnumerable<Song> getFavSong => db.Songs.Where(c => c.IsFavourite).Include(c => c.Author);

        public Song getObjectSong(int songId) => db.Songs.FirstOrDefault(c => c.id == songId);
    }
}
