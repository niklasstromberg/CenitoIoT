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
    }
}
