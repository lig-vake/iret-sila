using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace iret_sila.Data.Models
{
    public class MusicDirection
    {
        public int id { get; set; }
        public string name { get; set; }
        public List<Author> Authors { get; set; }// у направления много исполнителей
    }
}
