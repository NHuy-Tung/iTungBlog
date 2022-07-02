using iTungBlog.API.Data;
using iTungBlog.API.Models.DTO;
using iTungBlog.API.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace iTungBlog.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PostsController : Controller
    {
        private readonly iTungBlogDbContext dbContext;

        public PostsController(iTungBlogDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllPosts()
        {
            var posts = await dbContext.Posts.ToListAsync();
            return Ok(posts);
        }
        [HttpGet]
        [Route("{id:guid}")]
        [ActionName("GetPostById")]
        public async Task<IActionResult> GetPostById(Guid id)
        {
            var post = await dbContext.Posts.FirstOrDefaultAsync(x => x.Id == id);
            if (post != null)
            {
                return Ok(post);
            }
            return NotFound();
        }
        [HttpPost]
        public async Task<IActionResult> AddPost(AddPostRequest addPostRequest)
        {
            //convert DTO to entity
            var post = new Post()
            {
                Title = addPostRequest.Title,
                Content = addPostRequest.Content,
                Summary = addPostRequest.Summary,
                UrlHandle = addPostRequest.UrlHandle,
                FeaturedImageUrl = addPostRequest.FeaturedImageUrl,
                Visible = addPostRequest.Visible,
                Author = addPostRequest.Author,
                PublishDate = addPostRequest.PublishDate,
                UpdatedDate = addPostRequest.UpdatedDate,
            };
            post.Id = Guid.NewGuid();
            await dbContext.Posts.AddAsync(post);
            await dbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPostById), new { id = post.Id }, post);
        }
        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpdatePost([FromRoute] Guid id, UpdatePostRequest updatePostRequest)
        {
            var existingPost = await dbContext.Posts.FindAsync(id);
            if (existingPost != null)
            {
                existingPost.Title = updatePostRequest.Title;
                existingPost.Content = updatePostRequest.Content;
                existingPost.Summary = updatePostRequest.Summary;
                existingPost.UrlHandle = updatePostRequest.UrlHandle;
                existingPost.FeaturedImageUrl = updatePostRequest.FeaturedImageUrl;
                existingPost.Visible = updatePostRequest.Visible;
                existingPost.Author = updatePostRequest.Author;
                existingPost.PublishDate = updatePostRequest.PublishDate;
                existingPost.UpdatedDate = updatePostRequest.UpdatedDate;
                await dbContext.SaveChangesAsync();
                return Ok(existingPost);
            }
            return NotFound();
        }
        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeletePost(Guid id)
        {
            var existingPost = await dbContext.Posts.FindAsync(id);
            if (existingPost !=null)
            {
                dbContext.Remove(existingPost);
                await dbContext.SaveChangesAsync();
                return Ok(existingPost);
            }
            return NotFound();
        }
    }
}
