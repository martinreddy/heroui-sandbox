"use client";

import React, { useState } from "react";
import { Button, useDisclosure } from "@heroui/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/react";
import { Select, SelectItem, SelectSection } from "@heroui/react";
import { Autocomplete, AutocompleteItem } from "@heroui/react";

const SIZES = ["Small", "Medium", "Large"];
const FLAVORS = ["Vanilla", "Chocolate", "Strawberry"];

export default function Home() {
    const [flavor, setFlavor] = useState("");
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div className="flex items-center justify-center h-screen">

            <Button onPress={() => onOpen()}>Open Modal</Button>

            <Modal
                isOpen={isOpen}
                onClose={() => onOpenChange()}
                size="2xl"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>Pick Your Ice Cream</ModalHeader>
                            <ModalBody>

                                {/* Flavors */}
                                <div className="flex flex-row items-center gap-4">
                                    <div className="text-right min-w-40">Flavor:</div>
                                    <div className="flex flex-row items-center gap-2 w-80">
                                        <Autocomplete
                                            inputProps={{
                                                classNames: {
                                                    input: "border-0 pl-0 ring-0 focus-within:ring-0 focus-within:border-0",
                                                },
                                            }}
                                            size="sm"
                                            inputValue={flavor}
                                            onInputChange={setFlavor}
                                            placeholder="Select Flavor"
                                        >
                                            {FLAVORS.map((item: string) => (
                                                <AutocompleteItem key={item}>
                                                    {item}
                                                </AutocompleteItem>
                                            ))}
                                        </Autocomplete>
                                    </div>
                                </div>

                                {/* sizes */}
                                <div className="flex flex-row items-center gap-4">
                                    <div className="text-right min-w-40">Size:</div>
                                    <div className="flex flex-row items-center gap-2 w-80">
                                        <Select
                                            className="min-w-48 w-full"
                                            size="sm"
                                            selectionMode="single"
                                            placeholder="Select Size"
                                        >
                                            <SelectSection>
                                                {SIZES.map((item: string) => (
                                                    <SelectItem key={item}>
                                                        {item}
                                                    </SelectItem>
                                                ))}
                                            </SelectSection>
                                        </Select>
                                    </div>
                                </div>

                            </ModalBody>
                            <ModalFooter className="flex items-center">
                                <Button onPress={onClose}>Ok</Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
