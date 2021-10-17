using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using iret_sila.Data.Interfaces;
using iret_sila.Data.Models;

namespace iret_sila.Data.Repository
{
    public class MusicDirectionRepository : IMusicDirection
    {
        private readonly AppDBContent db;
        public MusicDirectionRepository(AppDBContent p)
        {
            this.db = p;
        }

        public IEnumerable<MusicDirection> getAllDirections => db.MusicDirections;
    }
}
