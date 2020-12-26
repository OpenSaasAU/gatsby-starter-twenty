import styled from 'styled-components'

const NavbarBase = styled.nav`
    @include vendor ${props => (props.show ? "('animation', 'reveal-header 0.5s')": "('animation', 'none')")};
    background: ${props => (props.show ? '#fff': 'transparent')};
    box-shadow: ${props => (props.show ? '0 1px 2px 0 rgba(0,0,0,0.075)' : 'none')};
    color: ${props => (props.show ? 'inherit' : '#fff')};
    cursor: default;
    font-size: 0.8em;
    left: 0;
    position: ${props => (props.show ? 'fixed' : 'absolute')};
    top: 0;
    width: 100%;
    z-index: 1030;

    h1 {
        font-weight: 900;
        margin: 0;

        span {
            font-weight: 300;
        }
    }

    nav {
        letter-spacing: 0.075em;
        position: absolute;
        right: ${props => (props.show ? '1.5em' : '2.5em')};
        text-transform: uppercase;
        top: ${props => (props.show ? '0.75em' : '1.75em')};

        ul {
            list-style: none;
            padding-left: 0;

            li {
                display: inline-block;
                margin-left: 1.5em;
                padding-left: 0;

                > ul {
                    display: none;
                }

                a {
                    border: solid 1px transparent;
                    color: inherit;
                    display: inline-block;
                    line-height: 1em;
                    padding: 0.6em 0.75em;
                    text-decoration: none;
                }

                input[type="button"],
                input[type="submit"],
                input[type="reset"],
                button,
                .button {
                    font-size: 1em;
                    min-width: 0;
                    width: auto;
                }

                &.submenu {
                    > a {
                        @include icon(false, solid);

                        &:before {
                            content: '\f107';
                            margin-right: 0.65em;
                        }
                    }
                }

                &.active,
                &:hover {
                    > a {
                        @include vendor('transition', 'all 0.2s ease-in-out');
                        background: rgba(188,202,206,0.15);
                    }
                }

                &.current {
                    > a {
                        font-weight: 900;
                    }
                }
            }
        }
    }

    &.reveal {
        @include vendor('animation', 'reveal-header 0.5s');
    }

    &.alt {
        @include vendor('animation', 'none');
        background: _palette(header, alt-bg);
        box-shadow: none;
        color: _palette(header, alt-fg);
        padding: 2em 2.5em;
        position: absolute;

        nav {
            right: 2.5em;
            top: 1.75em;

            ul {
                li {
                    &.active,
                    &:hover {
                        > a {
                            border: solid 1px;
                        }
                    }
                }
            }
        }
    }
`

export const Navbar = styled(NavbarBase)`
@include vendor ${props => (props.show ? "('animation', 'reveal-header 0.5s')": "('animation', 'none')")};
    background: ${props => (props.show ? '#fff': 'transparent')};
    box-shadow: ${props => (props.show ? '0 1px 2px 0 rgba(0,0,0,0.075)' : 'none')};
    color: ${props => (props.show ? 'inherit' : '#fff')};
cursor: default;
font-size: 0.8em;
left: 0;
position: ${props => (props.show ? 'fixed' : 'absolute')};
  visibility: visible;
  transition: all 200ms ease-in;
  transform: none;
`

export const Sidebar = styled(Navbar)`
  background: mediumpurple;
  a {
    padding-top: 15px;
    padding-left: 0;
  }

  writing-mode: vertical-lr;

  width: 40px;
  height: 100%;

  transform: ${props => (props.show ? 'none' : 'translateX(-100%)')};
`

export const Footer = styled(NavbarBase)`
  top: unset;
  bottom: 0;
  justify-content: center;
`

export const Content = styled.main`
  margin-top: ${props => (props.mt ? props.mt : 0)}px;
`

export const Wrapper = styled.div``

export const Position = styled.div`
  background: #e6513d;
  color: white;
  position: absolute;
  padding: 15px;
  top: 150px;
  left: 10px;

  span {
    display: block;
    color: black;
    font-weight: bold;
  }
`

export const RedBox = styled.div`
  background: red;
  color: white;
  position: absolute;
  padding: 15px;
  top: 300px;
  left: 10px;
`
