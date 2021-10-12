using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using iret_sila.Data.Models;

namespace iret_sila.Data.Interfaces
{
    interface IMusicDirection
    {
        IEnumerable<MusicDirection> getAllDirections { get; }// возвращает все направления музыки
    }
}
