namespace Application.Core
{
    public class Result<T>
    {
        public bool IsSuccess { get; set; }
        public T Value { get; set; }
        public string Error { get; set; }
        
        
        public static Result<T> Success(T value) => 
            new Result<T> {IsSuccess = true, Value = value};
        public static Result<T> Failure(string Error) =>
            new Result<T> {IsSuccess = false, Error = Error}; 
    }
}