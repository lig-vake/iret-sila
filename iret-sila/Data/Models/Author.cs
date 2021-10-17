using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace iret_sila.Data.Models
{
    public class Author
    {
        public int id { get; set; }
        public string name { get; set; }
        public string description { get; set; }// описание автора(исполнителя)

        public List<Song> Songs { get; set; }//у автора много песен

        public int musicDirectionId { get; set; }
        public virtual MusicDirection MusicDirection { get; set; }// у каждого автора одно направление
        public bool IsFavourite { get; set; }
    }
}
