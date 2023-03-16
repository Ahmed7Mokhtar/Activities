using API.Middleware;

namespace API.Extensions
{
    public static class ExceptionExtension
    {
        public static WebApplication UseException(this WebApplication app)
        {
            app.UseMiddleware<ExceptionMiddleware>();
            
            return app;
        }
    }
}