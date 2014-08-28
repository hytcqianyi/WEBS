namespace ITXY
{
    partial class FrmMain
    {
        /// <summary>
        /// 必需的设计器变量。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 清理所有正在使用的资源。
        /// </summary>
        /// <param name="disposing">如果应释放托管资源，为 true；否则为 false。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows 窗体设计器生成的代码

        /// <summary>
        /// 设计器支持所需的方法 - 不要
        /// 使用代码编辑器修改此方法的内容。
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(FrmMain));
            this.lblNickName = new System.Windows.Forms.Label();
            this.btnLogin = new System.Windows.Forms.Button();
            this.lblShuoshuo = new System.Windows.Forms.Label();
            this.picHeadImage = new System.Windows.Forms.PictureBox();
            this.txtNickName = new System.Windows.Forms.TextBox();
            this.pnFriendList = new System.Windows.Forms.Panel();
            this.ilHeadImages = new System.Windows.Forms.ImageList(this.components);
            ((System.ComponentModel.ISupportInitialize)(this.picHeadImage)).BeginInit();
            this.SuspendLayout();
            // 
            // lblNickName
            // 
            this.lblNickName.AutoSize = true;
            this.lblNickName.Location = new System.Drawing.Point(108, 18);
            this.lblNickName.Name = "lblNickName";
            this.lblNickName.Size = new System.Drawing.Size(41, 12);
            this.lblNickName.TabIndex = 0;
            this.lblNickName.Text = "label1";
            // 
            // btnLogin
            // 
            this.btnLogin.Location = new System.Drawing.Point(206, 62);
            this.btnLogin.Name = "btnLogin";
            this.btnLogin.Size = new System.Drawing.Size(75, 23);
            this.btnLogin.TabIndex = 2;
            this.btnLogin.Text = "button1";
            this.btnLogin.UseVisualStyleBackColor = true;
            this.btnLogin.Click += new System.EventHandler(this.btnLogin_Click);
            // 
            // lblShuoshuo
            // 
            this.lblShuoshuo.AutoSize = true;
            this.lblShuoshuo.Location = new System.Drawing.Point(108, 62);
            this.lblShuoshuo.Name = "lblShuoshuo";
            this.lblShuoshuo.Size = new System.Drawing.Size(41, 12);
            this.lblShuoshuo.TabIndex = 3;
            this.lblShuoshuo.Text = "label2";
            // 
            // picHeadImage
            // 
            this.picHeadImage.Location = new System.Drawing.Point(5, 5);
            this.picHeadImage.Name = "picHeadImage";
            this.picHeadImage.Size = new System.Drawing.Size(80, 80);
            this.picHeadImage.TabIndex = 5;
            this.picHeadImage.TabStop = false;
            // 
            // txtNickName
            // 
            this.txtNickName.Location = new System.Drawing.Point(181, 18);
            this.txtNickName.Name = "txtNickName";
            this.txtNickName.Size = new System.Drawing.Size(100, 21);
            this.txtNickName.TabIndex = 6;
            // 
            // pnFriendList
            // 
            this.pnFriendList.AutoScroll = true;
            this.pnFriendList.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.pnFriendList.Location = new System.Drawing.Point(5, 101);
            this.pnFriendList.Name = "pnFriendList";
            this.pnFriendList.Size = new System.Drawing.Size(300, 515);
            this.pnFriendList.TabIndex = 7;
            // 
            // ilHeadImages
            // 
            this.ilHeadImages.ImageStream = ((System.Windows.Forms.ImageListStreamer)(resources.GetObject("ilHeadImages.ImageStream")));
            this.ilHeadImages.TransparentColor = System.Drawing.Color.Transparent;
            this.ilHeadImages.Images.SetKeyName(0, "touxiang1.jpg");
            this.ilHeadImages.Images.SetKeyName(1, "touxiang2.jpg");
            this.ilHeadImages.Images.SetKeyName(2, "touxiang3.jpg");
            this.ilHeadImages.Images.SetKeyName(3, "touxiang4.jpg");
            this.ilHeadImages.Images.SetKeyName(4, "touxiang5.jpg");
            this.ilHeadImages.Images.SetKeyName(5, "touxiang6.jpg");
            this.ilHeadImages.Images.SetKeyName(6, "touxiang7.jpg");
            this.ilHeadImages.Images.SetKeyName(7, "touxiang8.jpg");
            this.ilHeadImages.Images.SetKeyName(8, "touxiang9.jpg");
            this.ilHeadImages.Images.SetKeyName(9, "touxiang10.jpg");
            // 
            // FrmMain
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.AutoScroll = true;
            this.ClientSize = new System.Drawing.Size(308, 664);
            this.Controls.Add(this.pnFriendList);
            this.Controls.Add(this.txtNickName);
            this.Controls.Add(this.picHeadImage);
            this.Controls.Add(this.lblShuoshuo);
            this.Controls.Add(this.btnLogin);
            this.Controls.Add(this.lblNickName);
            this.Name = "FrmMain";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.picHeadImage)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label lblNickName;
        private System.Windows.Forms.Button btnLogin;
        private System.Windows.Forms.Label lblShuoshuo;
        private System.Windows.Forms.PictureBox picHeadImage;
        private System.Windows.Forms.TextBox txtNickName;
        private System.Windows.Forms.Panel pnFriendList;
        public System.Windows.Forms.ImageList ilHeadImages;
    }
}

