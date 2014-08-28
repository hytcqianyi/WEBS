using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Data;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.Net;
using System.Net.Sockets;
using System.Threading;

namespace ITXY
{
    public partial class UcFriend : UserControl
    {
        private FrmMain frm;

        public FrmMain Frm
        {
            get { return frm; }
            set { frm = value; }
        }
        // public Friend CurFriend { get; set; }
        private Friend curFriend;

        public Friend CurFriend
        {
            get { return curFriend; }
            set
            { 
                curFriend = value;
                this.lblNickName.Text = value.NickName;
                this.lblShuoshuo.Text = value.Shuoshuo;
                this.picHeadImage.Image = this.frm.ilHeadImages.Images[value.HeadImageIndex];
                

            }
        }

        public UcFriend()
        {
            InitializeComponent();
        }

        private void UcFriend_Load(object sender, EventArgs e)
        {

        }
    }
}
