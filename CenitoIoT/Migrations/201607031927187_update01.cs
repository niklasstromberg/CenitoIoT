namespace CenitoIoT.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class update01 : DbMigration
    {
        public override void Up()
        {
            CreateIndex("dbo.Rooms", "HouseId");
            AddForeignKey("dbo.Rooms", "HouseId", "dbo.Houses", "HouseId", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Rooms", "HouseId", "dbo.Houses");
            DropIndex("dbo.Rooms", new[] { "HouseId" });
        }
    }
}
