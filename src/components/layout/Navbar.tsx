import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import {
  Modal,
  ModalContent,
  ModalBody,
useDisclosure,
} from "@heroui/react";
import { Login } from '../../pages/auth/Login';

export const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuthStore();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen}
        size='xl'
        onClose={onOpenChange}
        hideCloseButton
        scrollBehavior='inside'
      >
        <ModalContent>
          <ModalBody>
            <Login />
          </ModalBody>
        </ModalContent>
      </Modal>
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                {/* <Building2 className="h-8 w-8 text-green-600" /> */}
                <img src='/FacilitiEase-logo.png' alt='FacilitiEase Logo' className='h-full w-3/4' />
              </Link>
              <div className="hidden md:flex ml-10 space-x-8">
                <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Home
                </Link>
                <Link to="/offiease" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  OffiEase
                </Link>
                <Link to="/biobridge" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  BioEridge
                </Link>
                <Link to="/engieridge" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  EngiEridge
                </Link>
                <Link to="/protoeridge" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  ProtoEridge
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/dashboard"
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={logout}
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>

                  <button
                    onClick={() => {
                      onOpen();
                    }}
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    Login / Register
                  </button>
                  <Link
                    to="/book-now"
                    className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
                  >
                    Book Now
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};