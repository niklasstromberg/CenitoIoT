using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CenitoIoT.Models
{
    public class Room
    {
        // Vem är jag?
        [Key]
        public int RoomId { get; set; }
        [Required]
        public string RoomName { get; set; }
        public float? RoomHumidity { get; set; }
        public float? RoomTemperature { get; set; }

        // var finns jag?
        [Required]
        public int HouseId { get; set; }


        // Min och maxvärden sparas här
        public float? RoomHumidityHigh { get; set; }
        public DateTime? RHHTimestamp { get; set; }
        public float? RoomHumidityLow { get; set; }
        public DateTime? RHLTimestamp { get; set; }
        public float? RoomTemperatureHigh { get; set; }
        public DateTime? RTHTimestamp { get; set; }
        public float? RoomTemperatureLow { get; set; }
        public DateTime? RTLTimestamp { get; set; }


        public void ChangeValues()
        {
            Random rand = new Random();
            int i = rand.Next(2);
            if (i >= 1)
            {
                RoomHumidity = RoomHumidity + (float)0.1;
                RoomTemperature = RoomTemperature + 1;
            }
            else
            {
                RoomHumidity = RoomHumidity - (float)0.1;
                RoomTemperature = RoomTemperature -1;
            }
        }


    }
}
