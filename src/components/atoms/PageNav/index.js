import React from "react";

const PageNav = (prop) => {
    const data = prop;

    return (<>
        <section>
                <div className="pmNav">
                    <a href='/' className="homeHref">
                        {`
                            Portfolio Main
                        `}
                    </a>

                    <span className="arr"/>

                    <a href={data.href} className="projectHref">
                        {data.text}
                    </a>
                </div>
        </section>
        </>);
};

PageNav.propTypes = {};

PageNav.defaultProps = {};
export default PageNav;
