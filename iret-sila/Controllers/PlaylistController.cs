using iret_sila.Data.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace iret_sila.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlaylistController : ControllerBase
    {
        PlaylistContext db;
        public PlaylistController(PlaylistContext context)
        {
            db = context;
            if(!db.Playlists.Any())
            {
                db.Playlists.Add(new Playlist { SongsIds = "1,2,3", Name = "Test Playlist 1" });
                db.Playlists.Add(new Playlist { SongsIds = "3,1,5,4", Name = "Test Playlist 2" });
                db.SaveChanges();
            }
        }

        // GET: api/<PlaylistController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Playlist>>> Get()
        {
            return await db.Playlists.ToListAsync();
        }

        // GET api/<PlaylistController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Playlist>> Get(int id)
        {
            Playlist playlist = await db.Playlists.FirstOrDefaultAsync(x => x.Id == id);
            if (playlist == null) {
                return NotFound();
            }
            return new ObjectResult(playlist);
        }

        // POST api/<PlaylistController>
        [HttpPost]
        public async Task<ActionResult<Playlist>> Post(Playlist playlist)
        {
            if(playlist == null)
            {
                return BadRequest();
            }

            db.Add(playlist);
            await db.SaveChangesAsync();
            return Ok(playlist);
        }

        // PUT api/<PlaylistController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Playlist>> Put(Playlist playlist)
        {
            if(playlist == null)
            {
                return BadRequest();
            }
            
            if(!db.Playlists.Any(x => x.Id == playlist.Id))
            {
                return NotFound();
            }

            db.Update(playlist);
            await db.SaveChangesAsync();
            return Ok(playlist);
        }

        // DELETE api/<PlaylistController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Playlist>> Delete(int id)
        {
            Playlist playlist = await db.Playlists.FirstOrDefaultAsync<Playlist>(x => x.Id == id);
            if(playlist == null)
            {
                return NotFound();
            }

            db.Remove(playlist);
            await db.SaveChangesAsync();
            return Ok(playlist);
        }
    }
}
