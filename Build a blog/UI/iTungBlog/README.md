# ITungBlog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.
-Trang web sử dụng ASP.NET Core Web API CRUD cùng angular 
-Trong đó: 
	1. Về phía back-end ta tạo các phương thức bất đồng bộ async:
		+GetAllPosts: trả về list post lấy từ dbcontext.
		+GetPostById: kiểm tra id của post trong db có trùng với id cần tìm => trả về post đó nếu trùng.
		+AddPost:nhập dữ liệu cho AddPostRequest rồi chuyển đổi DTO AddPostRequest sang entity post với post.Id = Guid.New.Guild(); => add post mới vào dbcontext => savechanges => trả về post mới
		+UpdatePost:tìm post có id cần cập nhật gán vào 1 object mới => thông tin cập nhật từ DTO UpdatePostRequest sẽ được gán lại cho object mới đó => lưu thay đổi và trả về post sau khi được update.
		+DeletePost: Tìm id từ dbcontext nếu có sử dụng remove để xoá => lưu thay đổi.
	2. Từ cotroller ta gửi api tới front-end khi có yêu cầu => cần tạo chính sách cho back-end và front-end giao tiếp: 
		services.AddCors(options => options.AddPolicy("default", policy =>
            {
                policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();

            }));
     3.Front-end: tạo các phương thức tương tự để gửi yêu cầu xuống server với httpservice
