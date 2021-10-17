using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using iret_sila.Data.Interfaces;
using iret_sila.Data.Models;
using Microsoft.EntityFrameworkCore;
namespace iret_sila.Data.Repository
{
    public class AuthorRepository : IAuthor
    {
        private readonly AppDBContent db;
        public AuthorRepository(AppDBContent p)
        {
            this.db = p;
        }

        public IEnumerable<Author> getAllAuthors => db.Authors.Include(c => c.MusicDirection);

        public IEnumerable<Author> getFavAuthors => db.Authors.Where(c => c.IsFavourite).Include(c => c.MusicDirection);

        public Author getObjectAuthor(int authorId) => db.Authors.FirstOrDefault(c => c.id == authorId);
    }
}
