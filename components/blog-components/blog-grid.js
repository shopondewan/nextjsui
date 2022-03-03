import React, { Component } from 'react';
import Link from 'next/link';
class BlogGrid extends Component {
  render() {
    let publicUrl = '/'
    let imagealt = 'image'
    return (
		<div className="ltn__blog-area ltn__blog-item-3-normal mb-100 go-top">
			<div className="container">
			<div className="row">
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<Link href="/blog-details"><img src={publicUrl+"assets/img/blog/1.jpg"} alt="#" /></Link>
					</div>
					<div className="ltn__blog-brief">
					<div className="ltn__blog-meta">
						<ul>
						<li className="ltn__blog-author go-top">
							<Link href="/team-details"><i className="far fa-user" />by: Admin</Link>
						</li>
						<li className="ltn__blog-tags go-top">
							<Link href="/service"><i className="fas fa-tags" />Services</Link>
						</li>
						</ul>
					</div>
					<h3 className="ltn__blog-title"><Link href="/blog-details">Common Engine Oil Problems and Solutions</Link></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<Link href="/blog-details">Read more</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<Link href="/blog-details"><img src={publicUrl+"assets/img/blog/2.jpg"} alt="#" /></Link>
					</div>
					<div className="ltn__blog-brief">
					<div className="ltn__blog-meta">
						<ul>
						<li className="ltn__blog-author go-top">
							<Link href="/team-details"><i className="far fa-user" />by: Admin</Link>
						</li>
						<li className="ltn__blog-tags go-top">
							<Link href="/service"><i className="fas fa-tags" />Services</Link>
						</li>
						</ul>
					</div>
					<h3 className="ltn__blog-title"><Link href="/blog-details">How and when to replace brake rotors</Link></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />July 23, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<Link href="/blog-details">Read more</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<Link href="/blog-details"><img src={publicUrl+"assets/img/blog/3.jpg"} alt="#" /></Link>
					</div>
					<div className="ltn__blog-brief">
					<div className="ltn__blog-meta">
						<ul>
						<li className="ltn__blog-author go-top">
							<Link href="/team-details"><i className="far fa-user" />by: Admin</Link>
						</li>
						<li className="ltn__blog-tags go-top">
							<Link href="/service"><i className="fas fa-tags" />Services</Link>
						</li>
						</ul>
					</div>
					<h3 className="ltn__blog-title"><Link href="/blog-details">Electric Car Maintenance, Servicing &amp; Repairs</Link></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />August 22, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<Link href="/blog-details">Read more</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<Link href="/blog-details"><img src={publicUrl+"assets/img/blog/4.jpg"} alt="#" /></Link>
					</div>
					<div className="ltn__blog-brief">
					<div className="ltn__blog-meta">
						<ul>
						<li className="ltn__blog-author go-top">
							<Link href="/team-details"><i className="far fa-user" />by: Admin</Link>
						</li>
						<li className="ltn__blog-tags go-top">
							<Link href="/service"><i className="fas fa-tags" />Services</Link>
						</li>
						</ul>
					</div>
					<h3 className="ltn__blog-title"><Link href="/blog-details">How to Prepare for your First Track Day!</Link></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<Link href="/blog-details">Read more</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<Link href="/blog-details"><img src={publicUrl+"assets/img/blog/5.jpg"} alt="#" /></Link>
					</div>
					<div className="ltn__blog-brief">
					<div className="ltn__blog-meta">
						<ul>
						<li className="ltn__blog-author go-top">
							<Link href="/team-details"><i className="far fa-user" />by: Admin</Link>
						</li>
						<li className="ltn__blog-tags go-top">
							<Link href="/service"><i className="fas fa-tags" />Services</Link>
						</li>
						</ul>
					</div>
					<h3 className="ltn__blog-title"><Link href="/blog-details">How to: Make Your Tires Last Longer</Link></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<Link href="/blog-details">Read more</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<Link href="/blog-details"><img src={publicUrl+"assets/img/blog/6.jpg"} alt="#" /></Link>
					</div>
					<div className="ltn__blog-brief">
					<div className="ltn__blog-meta">
						<ul>
						<li className="ltn__blog-author go-top">
							<Link href="/team-details"><i className="far fa-user" />by: Admin</Link>
						</li>
						<li className="ltn__blog-tags go-top">
							<Link href="/service"><i className="fas fa-tags" />Services</Link>
						</li>
						</ul>
					</div>
					<h3 className="ltn__blog-title"><Link href="/blog-details">Common Engine Oil Problems and Solutions</Link></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<Link href="/blog-details">Read more</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<Link href="/blog-details"><img src={publicUrl+"assets/img/blog/7.jpg"} alt="#" /></Link>
					</div>
					<div className="ltn__blog-brief">
					<div className="ltn__blog-meta">
						<ul>
						<li className="ltn__blog-author go-top">
							<Link href="/team-details"><i className="far fa-user" />by: Admin</Link>
						</li>
						<li className="ltn__blog-tags go-top">
							<Link href="/service"><i className="fas fa-tags" />Services</Link>
						</li>
						</ul>
					</div>
					<h3 className="ltn__blog-title"><Link href="/blog-details">How and when to replace brake rotors</Link></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />July 23, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<Link href="/blog-details">Read more</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<Link href="/blog-details"><img src={publicUrl+"assets/img/blog/8.jpg"} alt="#" /></Link>
					</div>
					<div className="ltn__blog-brief">
					<div className="ltn__blog-meta">
						<ul>
						<li className="ltn__blog-author go-top">
							<Link href="/team-details"><i className="far fa-user" />by: Admin</Link>
						</li>
						<li className="ltn__blog-tags go-top">
							<Link href="/service"><i className="fas fa-tags" />Services</Link>
						</li>
						</ul>
					</div>
					<h3 className="ltn__blog-title"><Link href="/blog-details">Electric Car Maintenance, Servicing &amp; Repairs</Link></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />August 22, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<Link href="/blog-details">Read more</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<Link href="/blog-details"><img src={publicUrl+"assets/img/blog/2.jpg"} alt="#" /></Link>
					</div>
					<div className="ltn__blog-brief">
					<div className="ltn__blog-meta">
						<ul>
						<li className="ltn__blog-author go-top">
							<Link href="/team-details"><i className="far fa-user" />by: Admin</Link>
						</li>
						<li className="ltn__blog-tags go-top">
							<Link href="/service"><i className="fas fa-tags" />Services</Link>
						</li>
						</ul>
					</div>
					<h3 className="ltn__blog-title"><Link href="/blog-details">How to: Make Your Tires Last Longer</Link></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<Link href="/blog-details">Read more</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
				{/*  */}
			</div>
			<div className="row">
				<div className="col-lg-12">
				<div className="ltn__pagination-area text-center">
					<div className="ltn__pagination">
					<ul>
						<li><Link href="#"><i className="fas fa-angle-double-left" /></Link></li>
						<li><Link href="#">1</Link></li>
						<li className="active"><Link href="#">2</Link></li>
						<li><Link href="#">3</Link></li>
						<li><Link href="#">...</Link></li>
						<li><Link href="#">10</Link></li>
						<li><Link href="#"><i className="fas fa-angle-double-right" /></Link></li>
					</ul>
					</div>
				</div>
				</div>
			</div>
			</div>
		</div>
	  
    )
  }
}

export default BlogGrid;
