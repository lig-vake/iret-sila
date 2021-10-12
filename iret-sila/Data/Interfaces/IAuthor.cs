using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using iret_sila.Data.Models;
namespace iret_sila.Data.Interfaces
{
    interface IAuthor
    {
        IEnumerable<Author> getAllAuthors { get; }// возвращает всех исполнителей
        IEnumerable<Author> getFavAuthors { get; }// возвращает только избранных
        Author getObjectAuthor(int authorId);// возвращает конкректного автора по id
    }
}
