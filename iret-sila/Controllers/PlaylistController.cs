using Microsoft.AspNetCore.Mvc;

namespace iret_sila.Controllers
{
    public class PlaylistController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View();
        }
    }
}