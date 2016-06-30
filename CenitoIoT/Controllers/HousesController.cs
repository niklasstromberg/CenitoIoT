using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace CenitoIoT.Models
{
    public class HousesController : ApiController
    {
        private CenitoIoTContext db = new CenitoIoTContext();

        // GET: api/Houses
        public IQueryable<House> GetHouses()
        {
            return db.Houses;
        }

        // GET: api/Houses/5
        [ResponseType(typeof(House))]
        public IHttpActionResult GetHouse(int id)
        {
            House house = db.Houses.Find(id);
            if (house == null)
            {
                return NotFound();
            }

            return Ok(house);
        }

        // PUT: api/Houses/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutHouse(int id, House house)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != house.HouseId)
            {
                return BadRequest();
            }

            db.Entry(house).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HouseExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Houses
        [ResponseType(typeof(House))]
        public IHttpActionResult PostHouse(House house)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Houses.Add(house);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = house.HouseId }, house);
        }

        // DELETE: api/Houses/5
        [ResponseType(typeof(House))]
        public IHttpActionResult DeleteHouse(int id)
        {
            House house = db.Houses.Find(id);
            if (house == null)
            {
                return NotFound();
            }

            db.Houses.Remove(house);
            db.SaveChanges();

            return Ok(house);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool HouseExists(int id)
        {
            return db.Houses.Count(e => e.HouseId == id) > 0;
        }
    }
}