using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SunSoft.Startup))]
namespace SunSoft
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
