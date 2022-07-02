using iTungBlog.API.Models.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace iTungBlog.API.Data
{
    public class iTungBlogDbContext : DbContext
    {
        public iTungBlogDbContext(DbContextOptions options) : base(options)
        {
        }
        //Db Set
        public DbSet<Post> Posts { get; set; }
    }
}
