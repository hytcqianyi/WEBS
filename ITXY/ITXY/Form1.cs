using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.Net;
using System.Net.Sockets;
using System.Threading;

namespace ITXY
{
    public partial class FrmMain : Form
    {

       
        public FrmMain()
        {
            InitializeComponent();
        }

        

        private void Form1_Load(object sender, EventArgs e)
        {
            IPAddress myIP= Operation.getMyIP();
            if(myIP==null)
            {
                MessageBox.Show("对不起，未找到能工作的网卡，请检查！");
                Application.Exit();

            }
            FrmMain.CheckForIllegalCrossThreadCalls = false;

            Operation ope = new Operation(this);
            //侦听
            Thread th = new Thread(new ThreadStart(ope.listen));
            th.IsBackground = true;
            th.Start();

            Thread.Sleep(100);

            //发广播
            UdpClient uc = new UdpClient();
            string myNickName = myIP.ToString();
            string msg = "LOGIN|" + myNickName + "|2|大家来找我啊";
            byte[] bmsg = Encoding.Default.GetBytes(msg);
            uc.Send(bmsg, bmsg.Length, new IPEndPoint(IPAddress.Parse("255.255.255.255"), 9527));

        }

        public void addUcf(Friend f)
        {
            UcFriend ucf = new UcFriend();
            ucf.Frm=this;
            ucf.CurFriend = f;
            ucf.Top = this.pnFriendList.Controls.Count*ucf.Height;
            this.pnFriendList.Controls.Add(ucf);
        }

        private void btnLogin_Click(object sender, EventArgs e)
        {
            //发广播
            //UdpClient uc = new UdpClient();
            //string myNickName = this.txtNickName.Text;
            //string msg = "LOGIN|" + myNickName + "|2|大家来找我啊";
            //byte[] bmsg = Encoding.Default.GetBytes(msg);
            //uc.Send(bmsg, bmsg.Length, new IPEndPoint(IPAddress.Parse("255.255.255.255"), 9527));
          
        }
    }
}
