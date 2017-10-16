using System;
using System.Web;
using Microsoft.AspNet.SignalR;
namespace cptCanvas
{
    public class ChatHub : Hub
    {
        public void Send(string name, string message, string toast)
        {
            // Call the broadcastMessage method to update clients.
            Clients.All.broadcastMessage(name, message, toast);
        }

        public void Draw(string data, int level = 1)
        {
            // Call the broadcastMessage method to update clients.
            Clients.All.drawData(data, level);
        }
    }
}