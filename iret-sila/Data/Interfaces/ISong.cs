using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using iret_sila.Data.Models;

namespace iret_sila.Data.Interfaces
{
    interface ISong
    {
        IEnumerable<Song> getAllSong { get; set; }//выдаёт все треки
        IEnumerable<Song> getFavSong { get; set; }// выдаёт только избранные треки
        Song getObjectSong(int songId);// вернуть конкректный трек по id
    }
}
