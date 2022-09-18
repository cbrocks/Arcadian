using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ArcadianApi.Model
{
    public class ArcadianDbContext : DbContext
    {
        public ArcadianDbContext(DbContextOptions<ArcadianDbContext> options) : base(options) { }
        public DbSet<Transaction> Transactions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
