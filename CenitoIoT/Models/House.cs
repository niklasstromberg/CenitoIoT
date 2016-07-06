using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CenitoIoT.Models
{
    public class House
    {
        [Key]
        public int HouseId { get; set; }
        public string HouseName { get; set; }

        public virtual List<Room> Rooms { get; set; }


        public void SetRecords(House house)
        {
            foreach (Room r in house.Rooms)
            {
                r.ChangeValues();

                if (r.RoomHumidity > r.RoomHumidityHigh || r.RoomHumidityHigh == null)
                {
                    r.RoomHumidityHigh = r.RoomHumidity;
                    r.RHHTimestamp = DateTime.Now;
                }
                if (r.RoomHumidity < r.RoomHumidityLow || r.RoomHumidityLow == null)
                {
                    r.RoomHumidityLow = r.RoomHumidity;
                    r.RHLTimestamp = DateTime.Now;
                }
                if (r.RoomTemperature > r.RoomTemperatureHigh || r.RoomTemperatureHigh == null)
                {
                    r.RoomTemperatureHigh = r.RoomTemperature;
                    r.RTHTimestamp = DateTime.Now;
                }
                if (r.RoomTemperature < r.RoomTemperatureLow || r.RoomTemperatureLow == null)
                {
                    r.RoomTemperatureLow = r.RoomTemperature;
                    r.RTLTimestamp = DateTime.Now;
                }
                using (var db = new CenitoIoTContext())
                {
                    db.Entry(r).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                }
            }
        }
    }
}
