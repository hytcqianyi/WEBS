using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Net;
using System.Net.Sockets;

namespace ITXY
{

    public class Operation
    {
        public delegate void delAddFriend(Friend friend);

        private FrmMain _frm;
        public Operation(FrmMain frm)
        {
            _frm = frm;
        }

        public static IPAddress getMyIP()
        {
            //(IPAddress)Dns.GetHostAddresses(Dns.GetHostName()).GetValue(0);
           IPAddress[] ips = Dns.GetHostByName(Dns.GetHostName()).AddressList;
           foreach(IPAddress ip in ips)
           {
               if(ip.AddressFamily.ToString() == "InterNetwork")
               {
                   return ip;
               }
           }
            return null;
        
        }

        public void listen()
        {
            UdpClient uc = new UdpClient(9527);
            while (true)
            {
                IPEndPoint ipep = new IPEndPoint(IPAddress.Any, 0);

                byte[] bmsg = uc.Receive(ref ipep);
                string msg = Encoding.Default.GetString(bmsg);
                
                string[] datas = msg.Split('|');
                string msgHead=datas[0];
                switch(msgHead)
                {
                    case "LOGIN":
                        if (datas.Length != 4)
                    {
                        continue;
                    }

                    if(getMyIP().ToString()==ipep.Address.ToString())
                    {
                        continue;
                    }

                    Friend friend = new Friend();

                    int curIndex = Convert.ToInt32(datas[2]);
                    if (curIndex < 0 || curIndex >= _frm.ilHeadImages.Images.Count)
                    {
                        curIndex = 0;
                    }
                    friend.HeadImageIndex = curIndex;
                    friend.NickName = datas[1];
                    friend.Shuoshuo = datas[3];
                    friend.IP = ipep.Address;
                    object[] pars = new object[1];
                    pars[0] = friend;
                    _frm.Invoke(new delAddFriend(_frm.addUcf), pars);
                        
                    //回发，告诉对方我也在  ALSOON|头像|昵称|说说
                    break;
                    case "ALSOON":
                        break;
                    default:
                        break;
                }

                //if (datas[0] == "LOGIN")
                //{
                    
                //}
                
            }
        }
    }
}
