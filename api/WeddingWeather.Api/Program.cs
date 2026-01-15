using WeddingWeather.Application.Weather;
using WeddingWeather.Application.Cities;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddOpenApi();

var corsPolicyName = "Frontend";

builder.Services.AddCors(options =>
{
    options.AddPolicy(corsPolicyName, policy =>
    {
        policy
            .WithOrigins("http://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});
builder.Services.AddScoped<IWeatherService, WeatherService>();
builder.Services.AddControllers();
builder.Services.AddScoped<ICityService, CityService>();


var app = builder.Build();

app.UseCors(corsPolicyName);

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();


app.MapControllers();
app.Run();
