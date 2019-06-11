using System;
using System.Web;
using Microsoft.AspNet.SignalR;
namespace cptCanvas
{
    public class ChatHub : Hub
    {
        public void SendCoordinates(int x, int y, int w, int h, string f, string s, int l, string m, string o, int u, int z, int q)
        {
            Clients.All.receiveCoordinates(x, y, w, h, f, s, l, m, o, u, z, q);
        }

        public void Send(string name, string message, string toast)
        {
            Clients.All.broadcastMessage(name, message, toast);
        }
    }
}