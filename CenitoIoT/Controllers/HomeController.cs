using CenitoIoT.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.Mvc;

namespace CenitoIoT.Controllers
{
    public class HomeController : Controller 
    {

        private CenitoIoTContext db = new CenitoIoTContext();

        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        public IQueryable<House> GetHouses()
        {
            return db.Houses;
        }

        // returns the number of rooms in a house
        public int GetRoomsPerHouse(House h)
        {
            return h.Rooms.Count();
        }


        //// GET: api/Houses/5
        //[ResponseType(typeof(House))]
        //public IHttpActionResult GetHouse(int id)
        //{
        //    House house = db.Houses.Find(id);
        //    if (house == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(house);
        //}


    }
}
