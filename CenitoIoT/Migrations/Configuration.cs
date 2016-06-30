namespace CenitoIoT.Migrations
{
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<CenitoIoT.Models.CenitoIoTContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(CenitoIoT.Models.CenitoIoTContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            context.Houses.AddOrUpdate(
                p => p.HouseName,
                new House { HouseName = "Villan" },
                new House { HouseName = "Sommarstugan" }
                );
            context.Rooms.AddOrUpdate(
                new Room { RoomName = "Kök", HouseId = 1, RoomHumidity = (float)0.32, RoomTemperature = 21 },
                new Room { RoomName = "Vardagsrum", HouseId = 1, RoomHumidity = (float)0.45, RoomTemperature = 20 },
                new Room { RoomName = "Sovrum", HouseId = 1, RoomHumidity = (float)0.67, RoomTemperature = 22 },
                new Room { RoomName = "Farstu", HouseId = 2, RoomTemperature = 18, RoomHumidity = (float)0.77 },
                new Room { RoomName = "Allrum", HouseId = 2, RoomHumidity = (float)0.44, RoomTemperature = 20 }
                );
        }
    }
}
