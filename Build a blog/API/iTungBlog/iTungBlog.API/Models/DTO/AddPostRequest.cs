using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace iTungBlog.API.Models.DTO
{
    public class AddPostRequest
    {
        public string Title { get; set; }
        public String Content { get; set; }
        public String Summary { get; set; }
        public String UrlHandle { get; set; }
        public String FeaturedImageUrl { get; set; }
        public bool Visible { get; set; }
        public String Author { get; set; }
        public DateTime PublishDate { get; set; }
        public DateTime UpdatedDate { get; set; }
    }
}
