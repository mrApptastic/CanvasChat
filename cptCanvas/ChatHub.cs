using System;
using System.Web;
using Microsoft.AspNet.SignalR;
namespace cptCanvas
{
    public class ChatHub : Hub
    {
        public void SendCoordinates(int x, int y, int s, string z)
        {
            Clients.All.receiveCoordinates(x, y, s, z);
        }

        public void Send(string name, string message, string toast)
        {
            Clients.All.broadcastMessage(name, message, toast);
        }
    }
}