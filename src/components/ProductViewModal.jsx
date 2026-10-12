import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Divider } from '@mui/material';
import { useState } from 'react'

function ProductViewModal({open, setOpen, product, isAvailable}) {
  
  const {id: productId, productName, image, description, quantity, price, discount, specialPrice,} = product;
  const handleClickOpen = () => {
    setOpen(true);
  }
  

  return (
    <>
        <Dialog open={open} as="div" className="relative z-10 " onClose={close}>
        <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all md:max-w-155 md:min-w-155"
            >
                {image && (
                    <div className='flex justify-center aspect-3/2'>
                        <img 
                            src={image}
                            alt={productName}>
                        </img>
                    </div>
                )}

              <div className='px-6 pt-10 pb-2'>
                <DialogTitle as="h1" className="lg:text-3xl sm:text-2xl text-xl font-semibold leading-6 text-gray-800 m-4 ">
                    {productName}
                </DialogTitle>


                <div className='space-y-2 text-gray-700 pd-4'>
                    <div className="flex items-center justify-between gap-2">
                        {specialPrice ? (
                        <div className="flex flex-col ">
                            <span className="text-gray-400 line-through">
                                ${Number(price).toFixed(2)}
                            </span>
                            <span className="text-xl font-bold text-slate-700">
                            ${Number(specialPrice).toFixed(2)}
                            </span>
                        </div>
                        ): (
                            <div>
                                <span className="text-xl font-bold text-slate-700">
                                    {" "}
                                    ${Number(price).toFixed(2)}
                                </span>
                            </div>
                        )}


                        {isAvailable ? (
                            <p>In Stock</p>
                        ) : (
                            <p>Out Of Stock </p>
                    
                        )}
                    </div>

                    <Divider />

                    <p>{description}</p>

                </div>
            </div>

            <div className="flex-1 m-2 pt-4">
                <button
                    onClick={() => setOpen(false)}
                    type="button"
                    className="px-4 py-2 text-sm font-semibold text-slate-700 border hover:text-slate-800 hover:border-slate-800 rounded-md"
                >
                    Close
                </button>
            </div>



              </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default ProductViewModal