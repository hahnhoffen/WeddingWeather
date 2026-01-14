var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
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


var app = builder.Build();

app.UseCors(corsPolicyName);

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.MapGet("/cities", () =>
{
    var cities = new[]
    {
        new { id = "stockholm", name = "Stockholm", countryCode = "SE" },
        new { id = "gothenburg", name = "Gothenburg", countryCode = "SE" },
        new { id = "malmo", name = "Malmö", countryCode = "SE" }
    };

    return Results.Ok(cities);
})
.WithName("GetCities");

app.MapGet("/weather", (string cityId, string date) =>
{
    // Hardcoded stub response so the frontend can work end-to-end.
    // Keep this minimal. We'll replace with real logic later.
    var response = new
    {
        cityId,
        date,
        summary = new
        {
            avgTemperatureMax = 22.4,
            avgTemperatureMin = 14.1,
            rainProbability = 28.0,
            avgPrecipitation = 1.6,
            avgSunshineHours = 7.4,
            avgWindSpeed = 4.8,
            confidence = 82,
            overallScore = 74,
            riskLevel = "low"
        }
    };

    return Results.Ok(response);
})
.WithName("GetWeather");

app.Run();
