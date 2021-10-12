using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace iret_sila.Data.Models
{

    public class Song
    {
        public int id { get; set; }
        public string name { get; set; }
        public int authorId { get; set; }
        public virtual Author Author { get; set; }// у песни один автор
        public bool IsFavourite { get; set; }
    }
}
