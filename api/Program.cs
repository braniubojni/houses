using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var allowedOrigins = "localhost";

builder.Services.AddCors(opts =>
{
    // opts.AllowAnyOrigin = true;
    opts.AddPolicy(
        name: allowedOrigins,
        policy => 
        {
            policy.WithOrigins(
                "http://localhost:3000"
            );
        }
    );
});

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<HouseDbContext>(o => o.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking));
builder.Services.AddScoped<IHouseRepository, HouseRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();

app.UseCors(allowedOrigins);

app.MapGet("/houses", (IHouseRepository repo) =>
{// TODO: Make also service and controller slices
    return repo.GetAll();
})
.WithOpenApi();

app.Run();
