// Cosmique Dashboard - Personal Business Analysis Web App with Login Demo

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const inventory = [
  { id: 1, name: "Snail Cream", brand: "COSRX", stock: 35, price: 10500, cost: 8500 },
  { id: 2, name: "Heartleaf Cleanser", brand: "Anua", stock: 10, price: 11800, cost: 9600 },
  { id: 3, name: "Rice Toner", brand: "I'm From", stock: 50, price: 9500, cost: 7000 },
];

const salesData = [
  { month: "May", revenue: 210000 },
  { month: "June", revenue: 345000 },
  { month: "July", revenue: 510000 },
];

export default function DashboardApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simple login for demo (replace with real auth later)
    if (email === "admin@cosmique.com" && password === "1234") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid login. Try admin@cosmique.com / 1234");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <Card className="w-[400px]">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-center">Login to Cosmique Dashboard</h2>
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={handleLogin} className="w-full">Login</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold">📊 Cosmique Business Dashboard</h1>

      <Tabs defaultValue="inventory">
        <TabsList>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="products">Product List</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
        </TabsList>

        <TabsContent value="inventory">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-4">Inventory Overview</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Brand</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Cost</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventory.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.brand}</TableCell>
                      <TableCell>{item.stock}</TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell>{item.cost}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products">
          <Card>
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold mb-4">Add Product</h2>
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Product Name" />
                <Input placeholder="Brand" />
                <Input placeholder="Price" type="number" />
                <Input placeholder="Cost" type="number" />
                <Input placeholder="Stock Quantity" type="number" />
              </div>
              <Button className="mt-4">Add Product</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="finance">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-4">Finance Overview</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
