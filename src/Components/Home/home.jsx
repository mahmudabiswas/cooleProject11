import React from "react";
import Container from "./Container";

const Home = () => {
  return (
    <Container>
      <div className="flex gap-5 my-32">
        {/* div 1 */}
        <div className="flex-[1] flex flex-col justify-between gap-10 ">
          <div>
            <h1 className="text-7xl">
              Quality clean
              <br />
              <p className="text-primary">for your Home</p>
            </h1>
            <p className="my-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
              vitae vero eius voluptate? Accusantium, dolor. Cum illum quibusdam
              quis nemo?
            </p>
          </div>
          <div>
            <button>Book a services</button>
            <button> Read more </button>
          </div>
          <div className="divider"></div>
          <div className="flex justify-center items-center gap-3">
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12">
                  <img src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </div>
            </div>
            <p>Rate 5 out of 5 by our clients</p>
          </div>
        </div>
        {/* div 2 */}
        <div className="flex-[1] w-[700px] ">
          <img
            src="https://media.istockphoto.com/id/1067328542/photo/the-super-disinfecting-son-and-dad-duo.jpg?s=1024x1024&w=is&k=20&c=vAz5MkeZEACQ1SNRWcIqGR52e4EZvg40YpF_R4SWDr4="
            alt=""
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;
