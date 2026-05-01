"use client";


import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";

export function Task_Form({createPost}) {
  return (
    <Modal>
      <Button variant="secondary">Add Task</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Add Task</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we will get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">


                <form action={createPost} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Task Name</Label>
                    <Input placeholder="Enter task name" />
                  </TextField>
                  <TextField className="w-full" name="details" type="text">
                    <Label>Details </Label>
                    <Input placeholder="Enter task Details " />
                  </TextField>
                  
                  <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              {/* <Button slot="close">Submit</Button> */}
              <Button type="submit" >Submit</Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}