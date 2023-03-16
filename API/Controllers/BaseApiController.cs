using Application.Core;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        private IMediator _mediator;

        // if it exists ok if not get it again
        protected IMediator Mediator => _mediator ??= 
            HttpContext.RequestServices.GetService<IMediator>();

        protected ActionResult HandleResult<T>(Result<T> result)
        {
            if(result == null)
                return NotFound();
            // found value
            if(result.IsSuccess && result.Value != null)
                return Ok(result.Value);
            // not found value
            if(result.IsSuccess && result.Value == null)
                return NotFound();
            
            // other errors
            return BadRequest(result.Error);
        }
    }
}